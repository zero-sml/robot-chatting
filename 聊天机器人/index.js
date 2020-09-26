//一定要开启node服务
var sendText = document.querySelector(".send-text")

sendText.onkeyup = function (e) {
  // console.log(e.keyCode);
  if (e.keyCode === 13) {
    renderDom("mine", this.value)
    ajax({
      url: 'http:localhost:3000/chat',
      method: 'get',
      data: {
        text: this.value
      },
      isAsync: true,
      success: function (res) {
        console.log(res);
        renderDom('YiBo', res.text)
      }
    })
    this.value = ""
  }
}

function renderDom(who, text) {
  var divClass = who
  var aviator = ""
  if (who === "mine") {
    divClass += ' clearfix'
    aviator = "./img/mine.jpg"
  } else {
    aviator = "./img/YiBo.jpg"
  }
  var oDiv = document.createElement("div")
  oDiv.className = divClass
  oDiv.innerHTML = ` <img class="aviator" src="${aviator}" alt="">
  <div class="text">${text}</div>`
  var content = document.querySelector(".content")
  content.appendChild(oDiv)
  content.scrollTop = content.scrollHeight
}