import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';
import { Collection } from 'src/store/interfaces/collections.state.interface';

@Injectable({
  providedIn: 'root'
})

export class CollectionsService {
  private unsplash: Unsplash;
  private userName: string;

  constructor() {
    this.unsplash = new Unsplash({
      accessKey: "X1flNWcz9VUdOtGaWrciagqZO1_tiYb9eaWGal_xNU0",
      secret: "955ENv1kxwsTBc4t1D4yebhYnxcj9bqzebnvgajDl7E",
      callbackUrl: "http://localhost:4200/",
      timeout: 10000
    });
  }

  buildAutentificationString(): string {
    return this.unsplash.auth.getAuthenticationUrl([
      "public",
      "read_user",
      "read_photos",
      "write_collections",
      "read_collections"
    ])
  }

  authentificationUser(code: string) {
    return this.unsplash.auth.userAuthentication(code)
      .then(response => response.json())
      .then(json => {
        this.unsplash.auth.setBearerToken(json.access_token);
        this.unsplash.currentUser.profile()
        .then(response => response.json())
        .then(user => {
          console.log(user);
            this.userName = user.username;
        });
      });
  }

  getCollections(): Promise<Collection[]> {
    return this.unsplash.users.collections(this.userName, 1, 10, "popular").then(response => response.json());
  }

  getCollectionsById(id: string): Promise<Collection> {
    return this.unsplash.collections.getCollection(id).then(response => response.json());
  }

  addPhotoToCollection(collectionId: string, photoId: string){
    this.unsplash.collections.addPhotoToCollection(collectionId, photoId).then(response => response.json());
  }

  getCollectionPhotos(id: string): Promise<any[]> {
    return this.unsplash.collections.getCollectionPhotos(id).then(response => response.json());
  }

  createCollection(name: string, description: string): Promise<Collection> {
    return this.unsplash.collections.createCollection(name, description, false).then(response => response.json());
  }

  updateCollection(id: string, name: string, description: string): Promise<any[]> {
    return this.unsplash.collections.updateCollection(id, name, description, false).then(response => response.json());
  }
  

}

