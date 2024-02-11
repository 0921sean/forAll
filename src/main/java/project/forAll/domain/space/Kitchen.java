package project.forAll.domain.space;

import lombok.Getter;
import lombok.Setter;
import project.forAll.domain.BassDomain;
import project.forAll.domain.Image;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
public class Kitchen extends BassDomain {

    @Id @GeneratedValue
    @Column(name = "kitchen_id")
    private Long id;

    // 화구
    private Integer fireholeNum;
    // 주방 수용 인원
    private Integer capacity;
    // 주방기계
    private String equip;
    // 추가 사용가능 기계
    private String equipExtra;
    // 앞접시 이미지
    @ElementCollection
    private List<String> plateImage;
    // 앞접시 수
    private Integer plateNum;
    // 컵 이미지
    @ElementCollection
    private List<String> cupImage;
    // 컵 수
    private Integer cupNum;
    // 커트러리 이미지
    @ElementCollection
    private List<String> cutleryImage;
    // 커트러리 수
    private Integer cutleryNum;
}
