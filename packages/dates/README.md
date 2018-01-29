# FormatDate, FormatUtcDate
---
### Description
Displays datetime, or date, in a default format, or a provided format.

### Methods
* `static format([date] [datetime] [,format] [,inputFormat]) returns string`
* `static isValid(date, inputFormat) returns boolean`

### Properties
* `date - string, default null`
* `datetime - string, default null`
* `format - string, date default \'MM/DD/YYYY\', datetime default \'MM/DD/YYYY h:mm:ss a\'`
* `inputFormat - string, default null`
* `extends` [Text](/typography)

### Usage
```
import { FormatDate } from 'hixme-ui/lib/Dates

const date = FormatDate.format({ date: '2016-10-10', format='DD-MM-YYYY'})
const isValid = FormatDate.isValid({ date: '20-2016-01', inputFormat='DD-YYYY-MM'})

<FormatDate large primary date='10-10-1999' inputFormat='MM-DD-YYYY' format='LLLL'/>
```
### Notes
* `isValid()` uses strict parsing
* Irregular date formats will cause moment.js warnings, use `inputFormat` to negate
