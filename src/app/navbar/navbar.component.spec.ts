// tslint:disable-next-line:no-submodule-imports
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
// tslint:disable-next-line:no-submodule-imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;

	beforeEach(fakeAsync(() => {
		TestBed.configureTestingModule({
			imports: [MatSidenavModule],
			declarations: [NavbarComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should compile', () => {
		expect(component).toBeTruthy();
	});
});
