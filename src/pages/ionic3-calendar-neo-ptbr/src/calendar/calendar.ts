import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import * as _ from "lodash";

@Component({
    selector: 'ion-calendar',
    template: `
    <ion-grid>
        <ion-row justify-content-center>
            <ion-col col-auto (click)="back()">
                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>
            </ion-col>
            <ion-col col-auto>
                <div>{{displayYear}} - {{displayMonth + 1 | monthName}}</div>
            </ion-col>
            <ion-col col-auto (click)="forward()">
                <ion-icon ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col class="center calendar-header-col" *ngFor="let head of weekHead">{{head}}</ion-col>
        </ion-row>

        <ion-row class="calendar-row" *ngFor="let week of weekArray;let i = index">
            <ion-col class="center calendar-col" (click)="daySelect(day,i,j)"
            *ngFor="let day of week;let j = index"
            [ngClass]="[day.isThisMonth?'this-month':'not-this-month',day.isToday?'today':'',day.isSelect?'select':'']">
                {{day.date}}
                <span class="eventBlip" *ngIf="day.hasEvent"></span>
            </ion-col>
        </ion-row>

    </ion-grid>
`
})


export class Calendar {

    @Output() onDaySelect = new EventEmitter<dateObj>();

    @Output() onMonthSelect = new EventEmitter<any>();

    @Input() events: Array<singularDate> = [];

    currentYear: number;

    currentMonth: number;

    currentDate: number;

    currentDay: number;

    displayYear: number;

    displayMonth: number;

    
    dateArray: Array<dateObj> = []; // Array for all the days of the month

    weekArray = []; // Array for each row of the calendar

    lastSelect: number = 0; // Record the last clicked location

    //weekHead: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekHead: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];


    constructor() {
        this.currentYear = 2020;
        this.currentMonth = 1;
        this.currentDate = 21;
        this.currentDay = 22;
    }

    ngOnChanges() {
        this.createMonth(this.displayYear, this.displayMonth);
    }

    ngAfterViewInit() {        
            this.today(this.currentYear,this.currentMonth,this.currentDate);
            
        setTimeout(()=>{
            //Works! :)
            this.today(this.currentYear,this.currentMonth,this.currentDate);
        }, 1000); 

    }

    // Jump to today
    today(currentYear,currentMonth, currentDate) {
        this.displayYear = currentYear;
        this.displayMonth = currentMonth;
        this.createMonth(currentYear, currentMonth);

        // Mark today as a selection
        let todayIndex = _.findIndex(this.dateArray, {
            year: currentYear,
            month: currentMonth,
            date: currentDate,
            isThisMonth: true
        })
        this.lastSelect = todayIndex;
        this.dateArray[todayIndex].isSelect = true;

        this.onDaySelect.emit(this.dateArray[todayIndex]);
    }

    // carregarDataEspecifica(year:number,month:number,date:number) {
    //     this.displayYear = year;
    //     this.displayMonth = month;
    //     this.createMonth(year, month);

    //     // Mark today as a selection
    //     let dataEspecifica = _.findIndex(this.dateArray, {
    //         year: year,
    //         month: month,
    //         date: date,
    //         isThisMonth: true
    //     })
    //     this.lastSelect = dataEspecifica;
    //     this.dateArray[dataEspecifica].isSelect = true;

    //     this.onDaySelect.emit(this.dateArray[dataEspecifica]);
    // }


    isInEvents(year, month, date) {
        var i = 0, len = this.events.length;
        for (; i < len; i++) {
            if (this.events[i].year == year && this.events[i].month == month && this.events[i].date == date) {

                return true;
            }
        }
        return false;
    }

    //Check if there is any color param
    ColorCheck(year, month, date) {
        var i = 0, len = this.events.length;
        for (; i < len; i++) {
            if (this.events[i].year == year && this.events[i].month == month && this.events[i].date == date) {
                if (this.events[i].color != "") {
                    return this.events[i].color;
                } else {
                    return "default Color";
                }
            }
        }
        return "false ts";
    }

    CustomEventData(year, month, date, param) {
        var i = 0, len = this.events.length, data = "";
        for (; i < len; i++) {
            if (this.events[i].year == year && this.events[i].month == month && this.events[i].date == date) {
                switch (param) {
                    case "description":
                        data = this.events[i].description;
                        break;
                    case "time":
                        data = this.events[i].time;
                        break;
                }
                return data;
            }
        }
        return "false ts";
    }

   public createMonth(year: number, month: number) {
        this.dateArray = []; // Clear last month's data
        this.weekArray = []; // Clear week data

        let firstDay;
        // The day of the week on the first day of the current month of
        // selection determines how many days to take out last month. Sunday
        // does not show last month, Monday shows the previous month, Tuesday
        // shows the last two days

        let preMonthDays; // The number of days for the previous month
        let monthDays; // The number of days for the month
        let weekDays: Array<dateObj> = [];

        firstDay = moment({ year: year, month: month, date: 1 }).day();
        // The number of days last month
        if (month === 0) {
            preMonthDays = moment({ year: year - 1, month: 11 }).daysInMonth();
        } else {
            preMonthDays = moment({ year: year, month: month - 1 }).daysInMonth();
        }
        // The number of days this month
        monthDays = moment({ year: year, month: month }).daysInMonth();

        // PREVIOUS MONTH
        // Add the last few days of the previous month to the array
        if (firstDay !== 7) { // Sunday doesn't need to be shown for the previous month
            let lastMonthStart = preMonthDays - firstDay + 1; // From the last few months start
            for (let i = 0; i < firstDay; i++) {
                if (month === 0) {
                    this.dateArray.push({
                        year: year,
                        month: 11,
                        date: lastMonthStart + i,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        description: (this.CustomEventData(year, 11, lastMonthStart + i, "description")),
                        color: (this.ColorCheck(year, 11, lastMonthStart + i)),
                        time: (this.CustomEventData(year, 11, lastMonthStart + i, "time")),
                        hasEvent: (this.isInEvents(year, 11, lastMonthStart + i)) ? true : false,
                    })
                } else {
                    this.dateArray.push({
                        year: year,
                        month: month - 1,
                        date: lastMonthStart + i,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        description: (this.CustomEventData(year, month - 1, lastMonthStart + i, "description")),
                        color: (this.ColorCheck(year, month - 1, lastMonthStart + i)),
                        time: (this.CustomEventData(year, month - 1, lastMonthStart + i, "time")),
                        hasEvent: (this.isInEvents(year, month - 1, lastMonthStart + i)) ? true : false,
                    })
                }

            }
        }

        // Add the numeral for this month to the array
        for (let i = 0; i < monthDays; i++) {
            this.dateArray.push({
                year: year,
                month: month,
                date: i + 1,
                isThisMonth: true,
                isToday: false,
                isSelect: false,
                description: (this.CustomEventData(year, month, i + 1, "description")),
                color: (this.ColorCheck(year, month, i + 1)),
                time: (this.CustomEventData(year, month, i + 1, "time")),
                hasEvent: (this.isInEvents(year, month, i + 1)) ? true : false,
            })
        }

        if (this.currentYear === year && this.currentMonth === month) {
            let todayIndex = _.findIndex(this.dateArray, {
                year: this.currentYear,
                month: this.currentMonth,
                date: this.currentDate,
                isThisMonth: true
            })
            this.dateArray[todayIndex].isToday = true;
        }

        // Add the number of days next month to the array, with some months showing 6 weeks and some months showing 5 weeks
        if (this.dateArray.length % 7 !== 0) {
            let nextMonthAdd = 7 - this.dateArray.length % 7
            for (let i = 0; i < nextMonthAdd; i++) {
                if (month === 11) {
                    this.dateArray.push({
                        year: year,
                        month: 0,
                        date: i + 1,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        description: (this.CustomEventData(year, 0, i + 1, "description")),
                        color: (this.ColorCheck(year, 0, i + 1)),
                        time: (this.CustomEventData(year, 0, i + 1, "time")),
                        hasEvent: (this.isInEvents(year, 0, i + 1)) ? true : false,
                    })
                } else {
                    this.dateArray.push({
                        year: year,
                        month: month + 1,
                        date: i + 1,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        description: (this.CustomEventData(year, month + 1, i + 1, "description")),
                        color: (this.ColorCheck(year, month + 1, i + 1)),
                        time: (this.CustomEventData(year, month + 1, i + 1, "time")),
                        hasEvent: (this.isInEvents(year, month + 1, i + 1)) ? true : false,
                    })
                }

            }
        }

        // All date data is now added to the dateArray array

        // Insert the date data into the new array every seven days
        for (let i = 0; i < this.dateArray.length / 7; i++) {
            for (let j = 0; j < 7; j++) {
                weekDays.push(this.dateArray[i * 7 + j]);
            }
            this.weekArray.push(weekDays);
            weekDays = [];
        }
    }

    back() {
        // Decrementing the year if necessary
        if (this.displayMonth === 0) {
            this.displayYear--;
            this.displayMonth = 11;
        } else {
            this.displayMonth--;
        }
        this.onMonthSelect.emit({
            'year': this.displayYear,
            'month': this.displayMonth
        });
        this.createMonth(this.displayYear, this.displayMonth);
    }

    forward() {
        // Incrementing the year if necessary
        if (this.displayMonth === 11) {
            this.displayYear++;
            this.displayMonth = 0;
        } else {
            this.displayMonth++;
        }
        this.onMonthSelect.emit({
            'year': this.displayYear,
            'month': this.displayMonth
        });
        this.createMonth(this.displayYear, this.displayMonth);
    }

    // Select a day, click event
    daySelect(day, i, j) {
        // First clear the last click status
        this.dateArray[this.lastSelect].isSelect = false;
        // Store this clicked status
        this.lastSelect = i * 7 + j;
        this.dateArray[i * 7 + j].isSelect = true;

        this.onDaySelect.emit(day);
    }
}

interface singularDate {
    year: number,
    month: number,
    date: number,
    description?: string,  //Data to be displayed on event detail
    color?: string,        //Color from the marker on calendar
    time?: string,         //If uses time on event detail
    param?: string
}

// Each grid item of a calendar
interface dateObj {
    year: number,
    month: number,
    date: number, // What's the date?
    isThisMonth: boolean, // Is this the currently selected month?
    isToday?: boolean,
    isSelect?: boolean,
    description?: string,  //Data to be displayed on event detail
    color?: string,        //Color from the marker on calendar
    time?: string,         //If uses time on event detail
    param?: string,
    hasEvent?: boolean,
}
