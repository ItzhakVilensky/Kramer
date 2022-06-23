import { Pipe, PipeTransform } from "@angular/core";
import { IEDID } from "src/models/EDID";

@Pipe({
  name: 'searchEdid'
})

export class SearchEdidPipe implements PipeTransform {
  transform(data: IEDID[], searchTerm: string) {
    if (!data || !searchTerm) {
      return data;
    }
    return data.filter(data => data.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
  }
}
