import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../app/shared/subscription.service';
import { NotificationService } from '../../app/shared/notification.service';
// import { FileService } from '../file.service';
// import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(public service: SubscriptionService,
    private notificationService: NotificationService) {}
    // private fileService: FileService) {}
  
    // download() {
    //   this.fileService.downloadFile().subscribe(response => {
    //     let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
    //     const url = window.URL.createObjectURL(blob);
    //     //window.open(url);
    //     //window.location.href = response.url;
    //     fileSaver.saveAs(blob, 'employees.json');
    //   }), error => console.log('Error downloading the file'),
    //                () => console.info('File downloaded successfully');
    // }

  clientsName = [
    { id: 1, value: 'Client 1' },
    { id: 2, value: 'Client 2' },
    { id: 3, value: 'Client 3' },
  ]
  ngOnInit(): void {
    
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();

  }

  onSubmit() {
    if (this.service.form.valid == false) {
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(":: Submitted Successfully");
    }
  }
}
