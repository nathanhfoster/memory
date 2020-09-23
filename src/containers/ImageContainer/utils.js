import { shuffleArray } from 'utils'

const IMAGES = [
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/screenshots/[010]20200803_Faerthale_013(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/screenshots/[020]20200729_Sleepless_039(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/screenshots/[030]20200729_Amberfaet_033(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/screenshots/[040]20200803.FTpond(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/screenshots/[050]20190729_orc_dude(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/screenshots/[060]20200729_Faerthale_028(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/screenshots/[070]20200729_HalnirPassCave_001(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/screenshots/[090]20200729_Amberfaet_037(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[008]20200902_Forum(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[009]20200831_Faethalemood(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[010]20200902_DemithVillageSmithy(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[022]20200902_wardenshold(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[030]20200902_Murk(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[035]20200902_Giants(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[040]20200902_gasbat(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[050]20200902_halflingdwelling(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[060]20200902_Fae(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[070]20200902_Elvishdwelling(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[080]20200902_IOD(PREVIEW).png',
  'https://pantheonmmo.com/wp-content/uploads/pan-media/live/concepts/[090]20200902_Phantom(PREVIEW).png',
]

const IMAGE_OBJECT = IMAGES.map((src, i) => ({ imageKey: `imageKey-${i}`, src }))

const getInitialState = () => {
  const images = shuffleArray([...IMAGE_OBJECT, ...IMAGE_OBJECT])

  const initialState = images.reduce((state, image, i) => {
    state[i] = { ...image, isFlipped: false }
    return state
  }, {})

  return initialState
}

export { getInitialState }
