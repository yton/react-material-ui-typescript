import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { Utility } from './Utility';
import { Model } from "./Helpers";
import { User } from './User';

export interface IAppState {
    utility?: Utility;
    authentication?: User;
    users?: any;
    materials?: any;
    mail?: any;
}

export const AppStateModel = Model<IAppState>({
    utility: new Utility(),
    authentication: null,
    users: null,
    materials: null,
    mail: null
});

export class AppState extends AppStateModel {
    public static UTILITY = 'utility';
    public static AUTHENTICATION = "authentication";

    public utility: Utility;
    public authentication: User;
    public users: any;
    public materials: any;
    public mail: any;
}

export const isAuthenticated = connectedRouterRedirect({
    redirectPath: '/account/login',
    authenticatedSelector: (state: AppState) => state.authentication !== null,
    wrapperDisplayName: 'Authenticated'
}) as any;