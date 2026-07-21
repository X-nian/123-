(() => {
  const reflections = [
    ["人生没有后退选项。", "你可以怀念没有选择的那条路，但此刻的你只能从这里继续向前。"],
    ["这条路已经走过了。", "脚印还在，走过它的人却已经变成了现在的你。"],
    ["沉默已经发生。", "你可以重新理解那晚，却不能回到删除那句话之前。"],
    ["相爱不能被撤销。", "它可能结束，却不会因此变成从未发生。"],
    ["失去的人不会停在原路口。", "回头能够看见空位，却不能让那个人重新站进去。"],
    ["有些问题只是被推迟。", "你不回答它，它也会跟着人生继续长大。"],
    ["身体记得那把伞。", "现实没有留下证据，但习惯仍替你保留了一小块位置。"],
    ["撤回能覆盖记录。", "它不能替你免除选择另一条人生的代价。"],
    ["你不是在寻找正确答案。", "你正在选择自己愿意承担的那一条路。"],
    ["你正在回望，不是在返回。", "看清来路以后，请继续向前。"],
  ];

  let reflectionIndex = 0;
  const backButton = document.querySelector("#back");
  const modal = document.querySelector("#modal");

  backButton.onclick = () => {
    const nextNumber = reflectionIndex + 1;
    const [title, body] = nextNumber === 3
      ? ["你已经回望了三次。", "如果你觉得现在很痛苦，也许你已经走到了谷底。别再反复惩罚以前的自己——走过的路终会推着你，慢慢去往未来。"]
      : reflections[reflectionIndex % reflections.length];
    reflectionIndex += 1;
    modal.innerHTML = `<div class="modal"><div class="dialog">
      <span class="lookback-index">第 ${String(reflectionIndex).padStart(2, "0")} 次回望</span>
      <h2>${title}</h2><p>${body}</p>
      <button class="btn" id="close-lookback">我知道了，继续向前</button>
    </div></div>`;
    document.querySelector("#close-lookback").onclick = () => { modal.innerHTML = ""; };
  };

  history.pushState({ story: true }, "", location.href);
})();
