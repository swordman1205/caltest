import { AppDeclarativeHandler } from "@calcom/types/AppHandler";

import { createDefaultInstallation } from "../../_utils/installation";
import appConfig from "../config.json";

const handler: AppDeclarativeHandler = {
  appType: appConfig.type,
  slug: appConfig.slug,
  variant: appConfig.slug,
  supportsMultipleInstalls: false,
  handlerType: "add",
  createCredential: ({ appType, user, slug }) =>
    createDefaultInstallation({ appType, userId: user.id, slug, key: {} }),
};

export default handler;
