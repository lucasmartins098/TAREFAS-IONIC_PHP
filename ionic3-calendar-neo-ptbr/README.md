

A straight forward calendar module that has the optional capability to expand to *clickable days* and trackable *events*, with unobtrusive boiler-plating.

Using the correct JSON format you can display description related to the  date

## Ionic Support

This module was tested to Ionic v3.19.0.

### Installing

Go ahead and install via NPM

```
npm i ionic3-calendar-neo-ptbr --save
```

Within your **app.module.ts** file, make sure to add the import.

```javascript
import { CalendarModule } from 'ionic3-calendar-neo-ptbr';
@NgModule({
  ...
imports: [
  ...
  CalendarModule,
  ...
]
  ...
})
```

## Usage / Getting started

Basic usage is as follows:

```javascript
<ion-calendar #calendar></ion-calendar>
```

To make days clickable, and emit back information about the day selected, include the onDaySelect binding.

```javascript
<ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
```

You can add a button to jump to today, for ease of navigation:

```javascript
<button ion-button (click)="calendar.today()">Jump to Today</button>
```

### Events

Adding events to the calendar, as seen in the screenshot atop, those tiny notification blips can appear on a given day, if your backend API responds with the right date makeup for the given month. I suggest you write something that provides data for the former and the latter month, for the sake of edge days on a given month.

Accepted format of data:

```javascript
this.currentEvents = [
  {
   year: 2017,
   month: 12,
   date: 25,
   color: blue,
   description: description,
   time: 12:00
  }
];
```

The consequent invocation of these events would be done like so:

```javascript
<ion-calendar #calendar [events]="currentEvents" (onDaySelect)="onDaySelect($event)" (onMonthSelect)="onMonthSelect($event)"></ion-calendar>
```

### Changelog
>25th December 2017
>> Added Color,description and time parameter , returning data to be loaded on click.

> 8th December 2017
>> Added Events capability

> 5th December 2017
>> Added English comments to code
>> Added English month names instead of numerals on FE
>> Minor colour adjustments for legibility

## Authors

* **Laker Liu** - *Initial work* - [Ionic3-Calendar](https://github.com/laker007/ionic3-calendar)
* **gbrits_0**  - Mod to English Version - [Ionic3-Calendar-en] (https://www.npmjs.com/package/ionic3-calendar-en)
**It's not what you start in life, it's what you finish.**
