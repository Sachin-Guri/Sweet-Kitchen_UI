import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent implements OnInit {
  public size = input.required<number>();
  public name = input.required<string>();
  public color = input<string>('#2f2f2f');

  ngOnInit(): void {}
}
