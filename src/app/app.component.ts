import { Component } from "@angular/core";
import { TopMenu } from "top-menu/top-menu.component";

@Component({
	selector: "app-root",
	standalone: true,
	template: `
		<h1>DIANE SPARKS</h1>
		<h2>Game developer, programmer, writer, composer</h2>
		<top-menu [items]="['One', 'Two', 'Three', 'Four', 'Five']" />
	`,

	styleUrl: "./app.component.css",
	
	imports: [TopMenu],
})
export class AppComponent {
	protected test = 5;

	show_alert() {
		alert("THIS IS A TEST");
	}
}
