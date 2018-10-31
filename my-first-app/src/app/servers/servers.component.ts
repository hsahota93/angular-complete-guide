import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
  }

  ngOnInit() {
  }

  onCreateServer() {

    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Server name: ' + this.serverName;
  }

  onUpdateServerName(event: any) {

    this.serverName = event.target.value;
  }
}
