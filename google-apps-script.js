// Google Apps Script for Letwrk Waitlist Form
// This script receives form data and writes it to a Google Sheet

function doPost(e) {
  // Set CORS headers
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  try {
    // Parse the incoming data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      // Handle form data
      data = e.parameter;
    } else {
      throw new Error('No data received');
    }
    
    // Open your Google Sheet by ID (replace with your sheet ID)
    const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Check if headers exist, if not, add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name', 
        'Work Email',
        'Phone',
        'Company Name',
        'Designation',
        'Company Website'
      ]);
    }
    
    // Add the form data to the sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.workEmail || '',
      data.phone || '',
      data.companyName || '',
      data.designation || '',
      data.companyWebsite || ''
    ]);
    
    // Return success response
    return output.setContent(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    }));
      
  } catch (error) {
    // Return error response
    return output.setContent(JSON.stringify({
      status: 'error',
      message: error.toString()
    }));
  }
}

// Handle OPTIONS requests for CORS
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

// Optional: Add a doGet function for testing
function doGet() {
  return ContentService
    .createTextOutput('Letwrk Waitlist API is running!')
    .setMimeType(ContentService.MimeType.TEXT);
} 