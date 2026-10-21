import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCesta } from './item-cesta';

describe('ItemCesta', () => {
  let component: ItemCesta;
  let fixture: ComponentFixture<ItemCesta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCesta],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCesta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
