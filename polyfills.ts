"use client";
import "reflect-metadata";
import "./src/core/dependency-injection/container";
import { injectAppDependencies } from "./src/core/dependency-injection/container";

injectAppDependencies();
