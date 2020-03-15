import { observable, action, computed } from 'mobx';

export default class RegisterStore {
  @observable selectedItems = [];
  @observable courseItems = [
    {
      title: "인스타그램 클론으로 배우는 프론트엔드 테크닉",
      img: "instagram.png",
      startDate: "2020/01/01",
      endDate: "2020/01/30",
      lecturer: "쌍문동 파퀴아오"
    },
    {
      title: "MobX를 통한 상태관리 정복하기!",
      img: "mobx.png",
      startDate: "2020/02/01",
      endDate: "2020/02/30",
      lecturer: "노원구 피바다"
    },
    {
      title: "리액트 시작을 위한 ES7 (기초반)",
      img: "es7.png",
      startDate: "2020/03/01",
      endDate: "2020/03/30",
      lecturer: "중계동 척척박사"
    },
    {
      title: "네이버 코딩테스트 대비반",
      img: "naver.png",
      startDate: "2020/04/01",
      endDate: "2020/04/30",
      lecturer: "인도네시아 불주먹"
    },
    {
      title: "백준 기출 문제풀이",
      img: "boj.png",
      startDate: "2020/05/01",
      endDate: "2020/05/30",
      lecturer: "수유리 우동사리"
    },
    {
      title: "소수 유형 알고리즘 특강",
      img: "eratosthenes.png",
      startDate: "2020/06/01",
      endDate: "2020/06/30",
      lecturer: "공릉동 장도리"
    },
    {
      title: "최대공약수 유형 알고리즘 특강",
      img: "euclidean.png",
      startDate: "2020/07/01",
      endDate: "2020/07/30",
      lecturer: "흑석동 메이웨더"
    },
    {
      title: "알고리즘 입출력 완전정복 특강",
      img: "io.png",
      startDate: "2020/08/01",
      endDate: "2020/08/30",
      lecturer: "상도동 얍샙이"
    }
  ];

  @action
  put = title => {
    const curItem = this.courseItems.find(item => item.title === title);
    this.courseItems.remove(curItem);
    this.selectedItems.push(curItem);
  }

  @action
  take = title => {
    const curItem = this.selectedItems.find(item => item.title === title);
    this.selectedItems.remove(curItem);
    this.courseItems.push(curItem);
  }

  @computed
  get total() {
    console.log('장바구니 강좌 수 계산중...');
    return this.selectedItems.length;
  }
}
