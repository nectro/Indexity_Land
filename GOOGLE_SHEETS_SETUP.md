# Google Sheets Integration Setup Guide

This guide will help you connect your Letwrk waitlist form to Google Sheets using Google Apps Script.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Letwrk Waitlist" (or any name you prefer)
4. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the `SHEET_ID_HERE` part

## Step 2: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste the code from `google-apps-script.js` file
4. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID from Step 1
5. Save the project (Ctrl+S or Cmd+S)
6. Name your project "Letwrk Waitlist API"

## Step 3: Deploy the Web App

1. In Google Apps Script, click "Deploy" → "New deployment"
2. Click the gear icon next to "Type" and select "Web app"
3. Configure the deployment:
   - **Description**: "Letwrk Waitlist Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. **Important**: Copy the Web App URL that appears - you'll need this!
   - It looks like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

**IMPORTANT**: If you're updating an existing script, you need to:
1. Click "Deploy" → "Manage deployments"
2. Click the pencil icon next to your existing deployment
3. Change "Version" to "New version"
4. Click "Deploy" to update

## Step 4: Grant Permissions

1. When you first deploy, Google will ask for permissions
2. Click "Review permissions"
3. Choose your Google account
4. Click "Advanced" → "Go to [Project Name] (unsafe)"
5. Click "Allow"

## Step 5: Configure Your Next.js App

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add this line to the file:
   ```
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   Replace `YOUR_SCRIPT_ID` with the actual script ID from your Web App URL

## Step 6: Test the Integration

1. Restart your Next.js development server:
   ```bash
   npm run dev
   ```
2. Open your website and test the waitlist form
3. Check your Google Sheet - new submissions should appear automatically!

## Troubleshooting

### Common Issues:

1. **"Configuration error"**: Make sure your `.env.local` file has the correct URL
2. **"Failed to submit form"**: Check that your Google Apps Script is deployed and permissions are granted
3. **Data not appearing in Sheet**: Verify the Sheet ID in your Google Apps Script code

### Testing the Google Apps Script:

1. Open your Web App URL in a browser
2. You should see: "Letwrk Waitlist API is running!"
3. If you see an error, check your script code and permissions

### Updating the Script:

If you need to make changes to the Google Apps Script:
1. Edit the code in Google Apps Script
2. Save the changes
3. Click "Deploy" → "Manage deployments"
4. Click the pencil icon next to your deployment
5. Change the version to "New version"
6. Click "Deploy"

## Data Structure

Your Google Sheet will have these columns:
- **Timestamp**: When the form was submitted
- **Name**: User's full name
- **Work Email**: User's work email
- **Phone**: User's phone number (optional)
- **Company Name**: User's company
- **Designation**: User's role/position
- **Company Website**: Company website (optional)

## Security Notes

- The Google Apps Script is set to "Anyone" access, but it only accepts POST requests with specific data
- No sensitive information is stored in the client-side code
- All form data is sent directly to your Google Sheet
- You can restrict access further by modifying the script if needed

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all URLs and IDs are correct
3. Ensure your Google Apps Script has proper permissions
4. Test the Web App URL directly in a browser

Your waitlist form is now connected to Google Sheets! 🎉 