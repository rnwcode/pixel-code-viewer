import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pixel-code-viewer';

  style = 'style-1';
  complexity = 'low';
  size = 'small';
  pixelSize = "10";

  pixelData;
  colorData;
  widthCount;
  widthClass;

  constructor(private http: HttpClient) {
    this.http.get(`https://assignment.triu-software.de/api/${this.style}-${this.complexity}-${this.size}.json`).subscribe((res: any) => {
      this.widthCount = res.width;
      this.widthClass = 'grid_' + res.width;
      this.pixelData = res.data;
      this.colorData = res.colorTable;
    });
  }

  _updateImage() {
    this.http.get(`https://assignment.triu-software.de/api/${this.style}-${this.complexity}-${this.size}.json`).subscribe((res: any) => {
      this.widthCount = res.width;
      this.widthClass = 'grid_' + res.width;
      this.pixelData = res.data;
      this.colorData = res.colorTable;
    });
  }

  generateColor(index: number) {
    return `rgba(${this.colorData[index][0]}, ${this.colorData[index][0]}, ${this.colorData[index][0]})`;
  }

  getPixelSizeClass() {
    return `${Number(this.pixelSize) * this.widthCount}px`;
  }

  generateGridColumns() {
    return `repeat(${this.widthCount}, 1fr)`;
  }


}
