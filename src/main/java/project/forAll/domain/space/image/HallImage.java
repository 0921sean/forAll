package project.forAll.domain.space.image;

import lombok.Getter;
import lombok.Setter;
import project.forAll.domain.BassDomain;
import project.forAll.domain.Image;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class HallImage extends BassDomain {

    @Id @GeneratedValue
    @Column(name = "hallImage_id")
    private Long id;

    // 홀 우측면
    private String hallRight;
    // 홀 좌측면
    private String hallLeft;
    // 홀 정면
    private String hallFront;
    // 홀 후면
    private String hallBack;
    // 홀 전체샷
    private String hallEntire;
    // 홀 추가사진
    @ElementCollection
    private List<String> hallExtra = new ArrayList<>();

//    public addImage(Image image) {
//        this.hallExtra.add(image);
//        image.set(this);
//    }
}
