export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Set up the relative date formatter
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
export const timeAgo = new TimeAgo("en-US");

// Set up the Universal Unique ID Generator
import { v4 as uuidv4 } from "uuid"
export function generateUUID():string {
  return uuidv4()
}

// Set up the lodash parser
const assetsFileUrl = "https://raw.githubusercontent.com/rsek/datasworn/master/ironsworn_assets.json"
let assetJSON

fetch(assetsFileUrl).then((response) => {
  if (!response.ok) {
    throw new Error('Failed to fetch assets')
  }
  return response.json()
}).then((jsonData) => {
  assetJSON = jsonData.Assets
})

export { assetJSON }