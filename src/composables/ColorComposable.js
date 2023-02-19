import { ref } from "vue";

export default function usecolorComposable(){
    const colors = ["green", "red", "blue", "purple"];
    let message = ref("Pick a color...");

    const matchColor = (value) => {
      // do a random color based on the array index;
      const randomNumber = Math.floor(Math.random() * 4); //between 0 - 3

    if (colors[randomNumber] === value) {
        message.value = `You win... [answer: ${colors[randomNumber]}]`;
        return;
      }

      message.value = `You loose [answer: ${colors[randomNumber]}]`;
    };

    return { colors, message, matchColor };
}
