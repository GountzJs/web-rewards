import { defineStore } from "pinia";
import { ref } from "vue";
import { SpellsEntity } from "../api/entities/spells.entity";
import { Spell } from "../api/enums/spell.enum";

export const useSpellsStore = defineStore("user-spell", () => {
  const data = ref<SpellsEntity>(new SpellsEntity({ left: Spell.Flash, right: Spell.Ignite }));

  return { data };
});
