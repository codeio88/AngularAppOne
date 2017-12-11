import { Component } from '@angular/core';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    stringID: number = 1000;
    place: string = 'Atlanta';

    getServerPlace() {
        return this.place;
    }
}
