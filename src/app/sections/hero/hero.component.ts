import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {Meta, Title} from "@angular/platform-browser";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnDestroy {
  randomText = 0;
  indexText = 0;
  timer = interval(4000);
  timerSubscription: any;

  constructor(private cdr: ChangeDetectorRef,
              private title: Title,
              private meta: Meta,
              @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.randomText = Math.floor(Math.random() * 5);
    this.loadAnimation();
    // this.title.setTitle($localize`:@@LANDPAGE.SEO.TITLE:Foodsyeah - Change your eating habits`);
    // this.meta.updateTag( { name:'description',content: $localize`:@@LANDPAGE.SEO.DESC:A free application and product
    // database to help you start eating healthily, stop wasting food and have a real impact on the environment.`});
    // this.meta.updateTag( { name:'keywords',content: $localize`:@@LANDPAGE.SEO.KEYS:calorie counter,
    // free diet journal, weight loss program, nutrition facts, online calorie counter, free diet plan, free calorie counter`});
  }

  ngOnDestroy() {
    if(this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  loadAnimation() {
    if (isPlatformBrowser(this.platformId)) {
      this.timerSubscription = this.timer.subscribe(() => {
        this.indexText++;
        this.indexText = this.indexText % 5;
        this.cdr.markForCheck();
      });
    }
  }

}
