import "reflect-metadata";
import { DateTimeMother } from "./core/datetime/datetime.mother";
import { Settings as LuxonSettings } from "luxon";
import { injectIntegrationDependencies } from "./integration-container";

LuxonSettings.defaultZone = "UTC";
const expectedNow = DateTimeMother.now();
LuxonSettings.now = () => expectedNow.toMillis();

injectIntegrationDependencies();
