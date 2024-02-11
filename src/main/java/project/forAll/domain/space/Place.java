package project.forAll.domain.space;

import lombok.Getter;
import lombok.Setter;
import project.forAll.domain.BassDomain;
import project.forAll.domain.Image;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Place extends BassDomain {

    @Id @GeneratedValue
    @Column(name = "place_id")
    private Long id;

    // 홀 사진들
    @ElementCollection
    private List<String> hallImage = new ArrayList<>();

    // 홀 사진들
    @ElementCollection
    private List<String> kitImage = new ArrayList<>();

    // 메뉴 사진들
    @ElementCollection
    private List<String> menuImage = new ArrayList<>();

    // 공간명
    private String name;
    // 공간 한줄소개
    private String spaceBrief;
    // 공간 소개
    private String spaceIntro;
    // 주방 특성
    private PlaceKitchenFeat kitchenFeat;
    // 주소
    private String address;
    // 위치정보
    private String addressBrief;
    // 웹사이트
    private String website;
    // 대표 이미지
    private String mainImage;
}
