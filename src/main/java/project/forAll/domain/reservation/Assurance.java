package project.forAll.domain.reservation;

import lombok.Getter;
import lombok.Setter;
import project.forAll.domain.BassDomain;
import project.forAll.domain.Image;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
public class Assurance extends BassDomain {
    @Id
    @GeneratedValue
    @Column(name = "assurance_id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reservation_id")
    private Reservation reservation;

    // 대관 준비 주방 이미지
    @ElementCollection
    private List<String> readyKitImage;
    // 대관 준비 홀 이미지
    @ElementCollection
    private List<String> readyHallImage;
    // 대관 준비 기타 사진
    private String readyAdditionalImage;

    private String readyRecord; // 대관 진행 중 기록

    // 대관 마무리 주방 이미지
    @ElementCollection
    private List<String> finKitImage;
    // 대관 마무리 홀 이미지
    @ElementCollection
    private List<String> finHallImage;
    // 대관 마무리 기타 사진
    private String finAdditionalImage;

    private String finRecord; // 대관 진행 중 기록


}
