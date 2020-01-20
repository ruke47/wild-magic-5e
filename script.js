window.addEventListener('load', () => {
    document.getElementById('roll-button').addEventListener('click', () => {
        generateResult();
    });
});

function generateResult() {
    const event = pickOne(...wildMagicTable);
    let text = event.text;
    const vals = event.genValues();
    Object.keys(vals).forEach(key => {
        text = text.replace(`{{${key}}}`, vals[key]);
    })
    document.getElementById('result-text').textContent = text;
}

function roll(count, size) {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += Math.ceil(Math.random() * size);
    } 
    return sum;
}

function pickOne(...arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

const wildMagicTable = [
    {
        text: `Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.`,
        genValues: () => ({})
    },
    {
        text: `For the next minute, you can see any invisible creature if you have line of sight to it.`,
        genValues: () => ({})
    },
    {
        text: `A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later.`,
        genValues: () => ({})
    },
    {
        text: `You cast fireball as a 3rd-level spell centered on yourself. ({{damage}} fire damage, 20' radius.)`,
        genValues: () => ({
            damage: roll(8, 6)
        })
    },
    {
        text: `You cast magic missile as a 5th-level spell.`,
        genValues: () => ({})
    },
    {
        text: `{{changeType}} by {{inches}} inches.`,
        genValues: () => ({
            changeType: pickOne("Grow", "Shrink"),
            inches: roll(1, 10)
        })
    },
    {
        text: `You cast confusion centered on yourself.`,
        genValues: () => ({})
    },
    {
        text: `For the next minute, you regain 5 hit points at the start of each of your turns.`,
        genValues: () => ({})
    },
    {
        text: `You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.`,
        genValues: () => ({})
    },
    {
        text: `You cast grease centered on yourself.`,
        genValues: () => ({})
    },
    {
        text: `Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.`,
        genValues: () => ({})
    },
    {
        text: `Your skin turns a vibrant shade of {{color}}. A remove curse spell can end this effect.`,
        genValues: () => ({
            color: pickOne("red", "orange", "yellow", "green", "blue", "purple")
        })
    },
    {
        text: `An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.`,
        genValues: () => ({})
    },
    {
        text: `For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.`,
        genValues: () => ({})
    },
    {
        text: `You teleport up to 60 feet to an unoccupied space of your choice that you can see.`,
        genValues: () => ({})
    },
    {
        text: `You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.`,
        genValues: () => ({})
    },
    {
        text: `Maximize the damage of the next damaging spell you cast within the next minute.`,
        genValues: () => ({})
    },
    {
        text: `You become {{years}} years {{diffType}}.`,
        genValues: () => ({
            years: roll(1, 10),
            diffType: pickOne("older", "younger")
        })
    },
    {
        text: `{{count}} flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.`,
        genValues: () => ({
            count: roll(1, 6)
        })
    },
    {
        text: `You regain {{count}} hit points.`,
        genValues: () => ({
            count: roll(2, 6)
        })
    },
    {
        text: `You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.`,
        genValues: () => ({})
    },
    {
        text: `For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns.`,
        genValues: () => ({})
    },
    {
        text: `You cast levitate on yourself.`,
        genValues: () => ({})
    },
    {
        text: `A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.`,
        genValues: () => ({})
    },
    {
        text: `You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth.`,
        genValues: () => ({})
    },
    {
        text: `A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile.`,
        genValues: () => ({})
    },
    {
        text: `You are immune to being intoxicated by alcohol for the next {{count}} days.`,
        genValues: () => ({
            count: roll(5, 6)
        })
    },
    {
        text: `Your hair falls out but grows back within 24 hours.`,
        genValues: () => ({})
    },
    {
        text: `For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.`,
        genValues: () => ({})
    },
    {
        text: `You regain your lowest-level expended spell slot.`,
        genValues: () => ({})
    },
    {
        text: `For the next minute, you must shout when you speak.`,
        genValues: () => ({})
    },
    {
        text: `You cast fog cloud centered on yourself.`,
        genValues: () => ({})
    },
    {
        text: `Up to three creatures you choose within 30 feet of you take {{count}} lightning damage.`,
        genValues: () => ({
            count: roll(4, 10)
        })
    },
    {
        text: `You are frightened by the nearest creature until the end of your next turn.`,
        genValues: () => ({})
    },
    {
        text: `Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.`,
        genValues: () => ({})
    },
    {
        text: `You gain resistance to all damage for the next minute.`,
        genValues: () => ({})
    },
    {
        text: `A random creature within 60 feet of you becomes poisoned for {{count}} hours.`,
        genValues: () => ({
            count: roll(1, 4)
        })
    },
    {
        text: `You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.`,
        genValues: () => ({})
    },
    {
        text: `You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.`,
        genValues: () => ({})
    },
    {
        text: `Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute.`,
        genValues: () => ({})
    },
    {
        text: `You can take one additional action immediately.`,
        genValues: () => ({})
    },
    {
        text: `Each creature within 30 feet of you takes {{count}} necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.`,
        genValues: () => ({
            count: roll(1, 10)
        })
    },
    {
        text: `You cast mirror image.`,
        genValues: () => ({})
    },
    {
        text: `You cast fly on a random creature within 60 feet of you.`,
        genValues: () => ({})
    },
    {
        text: `You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.`,
        genValues: () => ({})
    },
    {
        text: `If you die within the next minute, you immediately come back to life as if by the reincarnate spell.`,
        genValues: () => ({})
    },
    {
        text: `Your size increases by one size category for the next minute.`,
        genValues: () => ({})
    },
    {
        text: `You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute.`,
        genValues: () => ({})
    },
    {
        text: `You are surrounded by faint, ethereal music for the next minute.`,
        genValues: () => ({})
    },
    {
        text: `You regain all expended sorcery points.`,
        genValues: () => ({})
    }
];
