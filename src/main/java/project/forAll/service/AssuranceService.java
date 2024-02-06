package project.forAll.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import project.forAll.domain.reservation.Assurance;
import project.forAll.domain.reservation.Reservation;
import project.forAll.form.AssuranceForm;
import project.forAll.repository.reservation.AssuranceRepository;

@Component
@Transactional
public class AssuranceService extends Service{
    @Autowired private AssuranceRepository assuranceRepository;
    @Autowired private ReservationService reservationService;
    @Autowired private ImageService imageService;

    @Override
    protected JpaRepository getRepository(){ return assuranceRepository; }

    public Assurance build(final AssuranceForm form){
        final Assurance assurance = new Assurance();
        if(form.getId() != null) assurance.setId(form.getId());
        assurance.setReservation((Reservation) reservationService.findById(form.getReservation()));
        assurance.setReadyKitImage(form.getReadyKitImage());
        assurance.setReadyHallImage(form.getReadyHallImage());
        assurance.setReadyAdditionalImage(form.getReadyAdditionalImage());
        assurance.setReadyRecord(form.getReadyRecord());
        assurance.setFinKitImage(form.getFinKitImage());
        assurance.setFinHallImage(form.getFinHallImage());
        assurance.setFinAdditionalImage(form.getFinAdditionalImage());
        assurance.setFinRecord(form.getFinRecord());

        return assurance;
    }
    public AssuranceForm of(final Assurance assurance){
        final AssuranceForm form = new AssuranceForm();
        form.setId(assurance.getId());
        form.setReservation(assurance.getReservation().getId());
        form.setReadyKitImage(assurance.getReadyKitImage());
        form.setReadyHallImage(assurance.getReadyHallImage());
        form.setReadyAdditionalImage(assurance.getReadyAdditionalImage());
        form.setReadyRecord(assurance.getReadyRecord());
        form.setFinKitImage(assurance.getFinKitImage());
        form.setFinHallImage(assurance.getFinHallImage());
        form.setFinRecord(assurance.getFinRecord());

        return form;
    }
}
