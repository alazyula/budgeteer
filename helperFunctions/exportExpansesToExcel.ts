import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as XLSX from 'xlsx';
import { writeFileAsync } from 'xlsx'; 




const saveXLSX = async (data: any[], filename: string) => {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  const fileUri = FileSystem.documentDirectory + filename;

  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
  const buffer = new ArrayBuffer(wbout.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < wbout.length; i++) view[i] = wbout.charCodeAt(i) & 0xff;

  const base64 = btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(buffer))));
  await FileSystem.writeAsStringAsync(fileUri, base64, {
    encoding: FileSystem.EncodingType.Base64,
  });

  console.log('XLSX file saved at: ', fileUri);
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(fileUri);
  }

};

export {  saveXLSX };


