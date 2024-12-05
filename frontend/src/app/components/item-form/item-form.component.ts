import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item, ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent {
  item: Item = { name: '', description: '' };

  constructor(private itemService: ItemService, private router: Router) {}

  saveItem(): void {
    this.itemService.createItem(this.item).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
