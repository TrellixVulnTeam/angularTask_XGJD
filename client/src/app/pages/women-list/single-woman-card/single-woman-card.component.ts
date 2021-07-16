import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Woman } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/users.service';
import { WomenService } from 'src/app/services/women.service';

@Component({
  selector: 'app-single-woman-card',
  templateUrl: './single-woman-card.component.html',
  styleUrls: ['./single-woman-card.component.css'],
})
export class SingleWomanCardComponent implements OnInit {
  _contemporaryUser: any = {};
  @Input() woman: Woman = new Woman();
  // @Output() woman: Woman = new Woman();

  constructor(
    public womenService: WomenService,
    public usersService: UsersService,
    public apiService: ApiService,
    public nav: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
