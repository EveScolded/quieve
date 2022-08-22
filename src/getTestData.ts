import { testTest } from "./model/model";

export const getTestData = async (testId:string): Promise<testTest> => {
    const response = await fetch('https://ektests.azurewebsites.net/api/GetTest?testId='+testId);
    const testData = response.json();
    return testData;
} 