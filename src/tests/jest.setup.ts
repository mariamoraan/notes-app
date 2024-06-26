import "reflect-metadata";
import { DateTimeMother } from "./core/datetime/datetime.mother";
import { Settings as LuxonSettings } from "luxon";
import { injectIntegrationDependencies } from "./mock-container";

LuxonSettings.defaultZone = "UTC";
const expectedNow = DateTimeMother.now();
LuxonSettings.now = () => expectedNow.toMillis();

export const mockedDependencies = injectIntegrationDependencies();
