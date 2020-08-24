
import { SearchState } from './search-state.intefaces';
import { AuthState } from './auth-state.interface';

export interface AppState {
    searchFeature: SearchState;
    authStateFeature: AuthState;
}