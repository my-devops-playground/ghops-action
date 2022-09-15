import GhopsAction from "@my-devops-playground/ghops-action";
import core from "@actions/core";

try {
    process.env.GHOPS_TOKEN = core.getInput("ghops-token");
    process.env.GHOPS_CONFIG = core.getInput("ghops-config");

    new GhopsAction().execute();
} catch (error) {
    core.setFailed(error.message);
}