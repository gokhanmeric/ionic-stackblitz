import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
	selector: 'app-deliverymore',
	templateUrl: './deliverymore.page.html',
	styleUrls: ['./deliverymore.page.scss'],
})
export class DeliverymorePage implements OnInit {

	constructor(public actionSheetController: ActionSheetController){}

	async presentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
		  header: 'İşlem Menü',
		  cssClass: 'task-action-menu',
		  buttons: [{
			text: 'Görevi Tamamla',
			icon: 'trash',
			handler: () => {
			  console.log('Görevi tamamla');
			}
		  }, {
			text: 'Share',
			handler: () => {
			  console.log('Share clicked');
			}
		  }, {
			text: 'Play (open modal)',
			icon: 'caret-forward-circle',
			handler: () => {
			  console.log('Play clicked');
			}
		  }, {
			text: 'Favorite',
			icon: 'heart',
			handler: () => {
			  console.log('Favorite clicked');
			}
		  }, {
			text: 'İptal',
			icon: 'close',
			role: 'cancel',
			handler: () => {
			  console.log('Cancel clicked');
			}
		  }]
		});
		await actionSheet.present();
	
		const { role } = await actionSheet.onDidDismiss();
		console.log('onDidDismiss resolved with role', role);
	  }

	ngOnInit() {}
}
