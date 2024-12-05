import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((data) => (this.items = data));
  }
}
