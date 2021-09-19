/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DemoComponent } from './demo.component';

let component: DemoComponent;
let fixture: ComponentFixture<DemoComponent>;

describe('demo component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DemoComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DemoComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});