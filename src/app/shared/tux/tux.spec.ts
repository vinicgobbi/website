import { TestBed } from '@angular/core/testing';
import { Tux } from './tux';

describe('Tux', () => {
  it('avisa quando é clicado', () => {
    const fixture = TestBed.createComponent(Tux);
    const summon = vi.fn();
    fixture.componentInstance.summon.subscribe(summon);
    fixture.detectChanges();

    (fixture.nativeElement as HTMLElement).querySelector('button')!.click();

    expect(summon).toHaveBeenCalledOnce();
  });
});
