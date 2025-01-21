import { Component, input, output } from "@angular/core";


@Component({
	selector: "top-menu",
	standalone: true,
	template: `
		<div class="topMenu">
			@for (item of items(); track item) {
				<button class="entry {{$index === selectedIndex ? 'selected' : ''}}" (click)="onClickEntry($index)">
					<div class="entryText">{{item.toUpperCase()}}</div>
				</button>
			}
		</div>
	`,
	
	styleUrl: "./top-menu.component.css",
})
export class TopMenu {
	items = input.required<string[]>();
	selectedIndex = 0;

	selectionChanged = output<number>();

	onClickEntry(index: number) {
		this.selectedIndex = index;
		this.selectionChanged.emit(index);
	}
}
