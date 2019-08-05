import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { HeroInformationService } from './hero-information.service'
import { Observable } from 'rxjs'

@Injectable()
export class HeroInformationResolveService implements Resolve<any> {
    constructor(private _heroinformationservice: HeroInformationService) { }

    resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any> {
        return this._heroinformationservice.getJSON();
    }
}