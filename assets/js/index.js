// 定义一个函数，用于生成地图
// 参数 cityname 表示城市名称，dom_id 表示要渲染地图的 HTML 元素 ID
function make_map(cityname, dom_id) {
  // 初始化 ECharts 实例，并绑定到指定的 DOM 元素（通过 dom_id）
  const achart = echarts.init(document.getElementById(dom_id));
  const cityInfo = {
    "北海道": {
      description: "日本の最北端に位置し、四季折々の美しい自然が魅力です\n冬にはスキーリゾート、夏には美しい花畑が楽しめます",
      images: [
        {
          src: "./assets/images/hokkaido/Hokkaido1363_2-thumb-345x345-2.jpg",
          title: "札幌とその周辺",
          caption: "冬はワンダーランド、夏は天国、札幌はすべてが屋外愛好家、素晴らしい食、有名なビールのためにある"
        },
        {
          src: "./assets/images/hokkaido/Hokkaido1432_5-thumb-345x345-6726.jpg",
          title: "函館と北海道南部",
          caption: "レトロな西洋の異国情緒、豊富な魚介類、奥地の楽しみと壮大な夜景"
        },
        {
          src: "./assets/images/hokkaido/Hokkaido1504_4-thumb-345x345-5255.jpg",
          title: "  釧路とひがし北海道",
          caption: "そのままの自然"
        },
        {
          src: "./assets/images/hokkaido/Hokkaido2584_8-thumb-345x345-9.jpg",
          title: "ニセコスキーリゾートとその周辺",
          caption: "完璧なパウダースノーで世界中のスキーヤーを魅了"
        },
        {
          src: "./assets/images/hokkaido/Hokkaido1449_10-thumb-345x345-4446.jpg",
          title: "旭川と北海道北部",
          caption: "主要な動物園と世界有数の粉雪のある、繫栄する職人の街"
        },
      ]
    },
    "東京都": {
      description: "日本の首都で、世界的に有名な高層ビルや多様な文化があります\n活気に満ちた街並みや、豊富な美味しい料理を楽しむことができます",
      images: [
        {
          src: "./assets/images/tokyo/Tokyo2293_10.jpeg",
          title: "両国",
          caption: "撲の本場はレトロな魅力でも有名です"
        },
        {
          src: "./assets/images/tokyo/Tokyo2260_1.jpeg",
          title: "東京タワーとその周辺",
          caption: "東京のシンボル的ランドマークはまばゆい光、豊かな文化そして江戸時代の静けさが重なる場所"
        },
      ],
    },
    "神奈川県": {
      description: "横浜市や鎌倉市があり、観光地として非常に人気があります\n美しい海岸線と多様な文化が融合しています",
      images: [
        {
          src: "./assets/images/kanagawa/Kanagawa295_16.jpeg",
          title: "箱根",
          caption: "有名な温泉、素晴らしい遺産、そして世界クラスのリゾートからの富士山の絶景"
        },
        {
          src: "./assets/images/kanagawa/Kanagawa227_9.jpeg",
          title: "川崎",
          caption: "東京の産業サイド"
        },
      ],
    },
    "千葉県": {
      description: "東京ディズニーリゾートや成田空港がある県で、観光客に人気があります\nまた、自然豊かな公園や美味しい海の幸も魅力です",
      images: [
        {
          src: "./assets/images/chiba/Chiba140_4.jpeg",
          title: "成田とその周辺",
          caption: "日本の玄関口だが、周辺にも見どころがたくさん"
        },
        {
          src: "./assets/images/chiba/Chiba126_5.jpeg",
          title: "千葉ベイエリア",
          caption: "世界的に有名な遊園地となだらかに起伏する公園があるにぎやかな港湾"
        },
      ],
    },
    "埼玉県": {
      description: "東京のベッドタウンとして知られていますが、美しい自然公園も点在しています\n家族連れに人気の遊園地もあります",
      images: [
        {
          src: "./assets/images/saitama/Saitama1272_1.jpeg",
          title: "熊谷",
          caption: "巨大なお寺や活気ある夏のお祭りが満載で、桜が咲き誇る街"
        },
        {
          src: "./assets/images/saitama/Saitama1278_4.jpeg",
          title: "川越",
          caption: "江戸時代の歴史的な雰囲気を残した東京北部の​​魅力的な街"
        },
      ],
    },
    "茨城県": {
      description: "筑波山があり、納豆やメロンが特産です\n自然や歴史的な名所も豊富です",
      images: [
        {
          src: "./assets/images/ibaraki/Shiga346_2.jpeg",
          title: "水戸",
          caption: "茨城の県庁所在地：あらゆる年齢層が楽しめる芸術、庭園、体験観光"
        },
        {
          src: "./assets/images/ibaraki/Ibaraki1580_4.jpeg",
          title: "大洗とひたちなか",
          caption: "茨城県の海辺の町、大洗町とひたちなか市にはたくさんの見所があります"
        },
      ],
    },
    "栃木県": {
      description: "日光東照宮があり、文化的な観光スポットが多くあります\n美味しいいちごや餃子が名物です",
      images: [
        {
          src: "./assets/images/tochigi/Tochigi_8903029.jpeg",
          title: "宇都宮",
          caption: "餃子、ジャズ、カクテルの街　大谷石文化の街"
        },
        {
          src: "./assets/images/tochigi/Tochigi953_3.jpeg",
          title: "日光",
          caption: "壮大な建築、長い歴史、ありのままの自然が融合する場所"
        },
      ],
    },
    "群馬県": {
      description: "温泉地の草津温泉や美味しい野菜が特産です\n自然豊かな地域で、アウトドア活動に適しています",
      images: [
        {
          src: "./assets/images/gunma/Gunma1635_1.jpeg",
          title: "草津",
          caption: "湯けむり漂う草津は温泉街のトップのままです"
        },
        {
          src: "./assets/images/gunma/Gunma1657_3.jpeg",
          title: "高崎",
          caption: "縁起だるま、蒸気機関車、雰囲気のある山の温泉"
        },
      ],
    },
    "宮城県": {
      description: "宮城県は、東北地方の中心都市である仙台市があり、歴史と自然が調和した魅力的な地域です\n名物の牛タンや、松島の美しい景色など、観光客に人気のスポットが豊富です",
      images: [
        {
          src: "./assets/images/miyagi/10729005212_dkmdci.jpeg",
          title: "仙台市",
          caption: "侍の歴史に満ちた近代都市"
        },
        {
          src: "./assets/images/miyagi/H_00235_001.jpeg",
          title: "宮城の海岸エリア",
          caption: "宮城の美しい沿岸に散在するエメラルドグリーンの島々"
        },
      ],
    },
  };

  // 配置选项
  var option = {
    // 设置地图标题
    title: [
      {
        text: cityname,
        subtext: "",
        top: "auto",
        left: "auto",
        textStyle: {
          color: "#FFFFFF",
          fontSize: 18
        },
        subtextStyle: {
          color: "#FFFFFF",
          fontSize: 12
        }
      }
    ],

    // 设置图例
    legend: [
      {
        selectedMode: "multiple",
        top: "top",
        orient: "horizontal",
        data: [""],
        left: "center",
        show: true
      }
    ],

    // 设置地图背景颜色
    backgroundColor: "#ccc",

    // 地图数据及样式设置
    series: [
      {
        type: "map",
        mapType: cityname,
        data: [], // 可以根据需要添加数据
        name: "",
        symbol: "circle",
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#FFFFFF', // 默认颜色
          },
          emphasis: {
            areaColor: '#BC002D', // 鼠标悬停时的颜色
          },
          selected: {
            areaColor: '#BC002D' // 被点击时的颜色
          }
        },
        label: {
          normal: {
            show: true,
            color: '#000000',
          },
          emphasis: {
            color: '#000000'
          }
        }
      }
    ],

    // 增加 tooltip 配置
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        const cityName = params.name;
        const cityDescription = cityInfo[cityName] ? cityInfo[cityName].description : 'No description available.';
        return `<strong>${cityName}</strong><br>${cityDescription.replace(/\n/g, '<br>')}`;
      }
    }
  };

  // 使用指定的配置项和数据来渲染图表
  achart.setOption(option);

  // 添加点击事件监听器
  achart.on('click', function(params) {
    if (params.componentType === 'series') {
      // 创建模态窗，使用 params.name 作为内容
      showModal(params.name);
    }
  });

  function showModal(cityName) {
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');
    const cityData = cityInfo[cityName] || { description: 'No description available.', images: [] };

    // 更新模态窗标题
    modalTitle.innerText = cityName;

    // 生成轮播内容
    let carouselItems = '';
    cityData.images.forEach((image, index) => {
        carouselItems += `
        <div class="carousel-item  ${index === 0 ? 'active' : ''}">
            <img src="${image.src}" class="d-block w-100" alt="${image.title}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${image.title}</h5>
                <p>${image.caption}</p>
            </div>
        </div>
        `;
    });

    // 更新模态窗内容，增加样式以区分图片和描述
    modalContent.innerHTML = `
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${carouselItems}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="modal-description mt-3">
          <p>${cityData.description.replace(/\n/g, '<br>')}</p>
      </div>
    `;

    // 添加一些自定义样式
    const style = document.createElement('style');
    style.innerHTML = `
      .modal-description {
          padding: 10px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 5px;
          margin-top: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);

    $(function(){
      $('#carouselExampleCaptions').carousel({interval:1500});
    });

    // 使用 Bootstrap 的 Modal 方法显示模态窗
    const modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.show();
}




  // 关闭模态窗的功能（可以在模态窗内部添加一个关闭按钮）
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  
}
