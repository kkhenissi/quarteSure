import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ParticipantService } from './participant.service';


xdescribe('ParticipantService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]

  }));

  it('should be created', () => {
    const service: ParticipantService = TestBed.get(ParticipantService);
    expect(service).toBeTruthy();
  });
});
