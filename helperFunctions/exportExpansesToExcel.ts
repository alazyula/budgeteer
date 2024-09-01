import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as XLSX from 'xlsx';
import { writeFileAsync } from 'xlsx'; 
//import * as RNFS from '@dr.pogodin/react-native-fs';
import { StorageAccessFramework } from 'expo-file-system';




const saveXLSX = async (data: any[], filename: string) => {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');



  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
  const buffer = new ArrayBuffer(wbout.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < wbout.length; i++) view[i] = wbout.charCodeAt(i) & 0xff;

  const base64 = btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(buffer))));
    // Request permission to access the Downloads directory
    const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
    if (!permissions.granted) {
      console.log('Permission not granted to access the Downloads directory');
      return;
    }

    // Create the file in the selected directory
    const fileUri = await StorageAccessFramework.createFileAsync(
      permissions.directoryUri,
      filename,
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );

    // Write the file content to the created file
    await FileSystem.writeAsStringAsync(fileUri, base64, {
      encoding: FileSystem.EncodingType.Base64,
    });

};
      // Get the Downloads folder path
    //  const downloadsDir = RNFS.DownloadDirectoryPath;
    //  const downloadsFileUri = `${downloadsDir}/${filename}`;
    
      // Save the file
   //   await RNFS.writeFile(fileUri, buffer.toString(), 'ascii');
   //   console.log('File saved at: ', fileUri);

 // console.log('XLSX file saved at: ', fileUri);
  //if (await Sharing.isAvailableAsync()) {
   // await Sharing.shareAsync(fileUri);
  //}



export {  saveXLSX };


