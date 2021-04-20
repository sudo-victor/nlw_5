import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { Setting } from "./entities/Setting";

import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

routes.post("/settings", async (request, response) => {
  const {chat, username} = request.body;

  try {
    const settingsRepository = getCustomRepository(SettingsRepository);
    const settings = settingsRepository.create({
      chat,
      username,
    })

    await settingsRepository.save(settings);

    return response.json(settings);
  } catch (error) {
    return response.status(500).json({error})
  }
})

export { routes };