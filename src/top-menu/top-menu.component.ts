import { Component, Input } from "@angular/core";


@Component({
	selector: "top-menu",
	standalone: true,
	template: `
		<div class="topMenu">
			@for (item of items; track item) {
				<button class="entry">
					{{item.toUpperCase()}}
				</button>
			}
		</div>
	`,
	
	styleUrl: "./top-menu.component.css",
})
export class TopMenu {
	@Input({required: true}) items: string[] = [];
}
