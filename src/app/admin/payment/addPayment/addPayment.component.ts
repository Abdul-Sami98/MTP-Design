import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-addPayment',
  templateUrl: './addPayment.component.html',
  styleUrls: ['./addPayment.component.scss'],
})

export class addPaymentComponent {
  categoriesForm!: UntypedFormGroup;

  // File Upload
  imageURL: string | undefined;
  fileChange(event: any) {
    let fileList: any = event.target as HTMLInputElement;
    let file: File = fileList.files[0];
    document.getElementById('');
    this.categoriesForm.patchValue({
      // image_src: file.name
      image_src: 'brands/dribbble.png',
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      (document.getElementById('category-img') as HTMLImageElement).src =
        this.imageURL;
    };
    reader.readAsDataURL(file);
  }
}
