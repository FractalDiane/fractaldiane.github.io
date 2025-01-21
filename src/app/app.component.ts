import { Component } from "@angular/core";
import { TopMenu } from "top-menu/top-menu.component";
import { PageAbout } from "page-about/page-about.component";

enum Tab {
	About,
	Games,
	Programming,
	Music,
}

@Component({
    selector: "app-root",
    template: `
		<h1>DIANE SPARKS</h1>
		<h2>Game developer, programmer, writer, composer</h2>
		<h2>[UNDER CONSTRUCTION]</h2>
		<div class="mainPage">
			<top-menu [items]="['About', 'Games', 'Programming', 'Music']" (selectionChanged)="topMenuSelectionChanged($event)" />

			@switch (currentTab) {
				@case (Tab.About) {
					<page-about />
				}

				@case (Tab.Games) {
					THIS IS THE GAMES PAGE
				}

				@case (Tab.Programming) {
					THIS IS THE PROGRAMMING PAGE
				}

				@case (Tab.Music) {
					THIS IS THE MUSIC PAGE
				}
			}
		</div>
	`,
    styleUrl: "./app.component.css",
    imports: [TopMenu, PageAbout]
})
export class AppComponent {
	protected Tab = Tab;
	protected currentTab = Tab.About;
	
	topMenuSelectionChanged(index: number) {
		this.currentTab = index as Tab;
	}
}
